import waitFor from "./waitFor";

class Throttle {
  private lastExec: number;
  private limit: number;
  constructor(limit: number) {
    this.lastExec = 0;
    this.limit = limit;
  }
  async throttle() {
    const now = Date.now();
    const difference = now - this.lastExec;
    if (difference < this.limit) {
      await waitFor(this.limit - difference);
      console.info(
        `Info: Throttled for ${difference}ms | Last Exec: ${this.lastExec} | Current Exec: ${now}`,
      );
    }
    this.lastExec = now;
  }
}

export const NotionThrottle = new Throttle(340);
