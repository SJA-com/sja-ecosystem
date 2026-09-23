import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
  IntersectionObserverMock.instances = [];
});

// jsdom doesn't implement IntersectionObserver. This mock records every
// instance so tests can drive the Navbar's scroll-spy by invoking the
// captured callback with fake entries.
export class IntersectionObserverMock {
  static instances: IntersectionObserverMock[] = [];
  readonly callback: IntersectionObserverCallback;
  readonly options?: IntersectionObserverInit;
  readonly observed: Element[] = [];
  disconnected = false;

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback;
    this.options = options;
    IntersectionObserverMock.instances.push(this);
  }
  observe(el: Element) {
    this.observed.push(el);
  }
  unobserve() {}
  disconnect() {
    this.disconnected = true;
  }
  takeRecords() {
    return [];
  }
  /** Fire the callback as if `targets` intersected (or not). */
  trigger(targets: { target: Element; isIntersecting: boolean }[]) {
    this.callback(
      targets as unknown as IntersectionObserverEntry[],
      this as unknown as IntersectionObserver
    );
  }
}

globalThis.IntersectionObserver =
  IntersectionObserverMock as unknown as typeof IntersectionObserver;
