// Delay for cards in a grid, capped so the last card doesn't wait too long
const staggerDelay = (index) => Math.min(index * 0.08, 0.4);

export default staggerDelay;
