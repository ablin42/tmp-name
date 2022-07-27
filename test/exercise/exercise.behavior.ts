// import { expect } from "chai";

export function shouldBehaveLikeExercise(): void {
  it("should delete items at index leaving no gaps", async function () {
    await this.exercise.connect(this.signers.admin).deleteItems([5, 1, 7]);
    // expect(await this.exercise.connect(this.signers.admin).greet()).to.equal("Hello, world!");
  });
}
