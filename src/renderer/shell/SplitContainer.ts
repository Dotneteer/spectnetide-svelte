export function calculateInitialSizes(
  hostSize: number,
  minSize: number,
  children: HTMLElement[]
): number[] {
  // --- Get explicitly set initial sizes
  const initialSizes = Array.from(children).map(e => e.getAttribute("data-initial-size"));
  const percentages: number[] = [];

  // --- Calculate the expectable sum size
  let implicit = children.length;
  let sumSize = 0;
  for (let i = 0; i < initialSizes.length; i++) {
    var initialSize = initialSizes[i];
    let size = minSize;
    if (initialSize !== null) {
      const parsedSize = parseInt(initialSize);
      if (!isNaN(parsedSize)) {
        percentages[i] = size = parsedSize;
        implicit--;
      }
    } else {
        percentages[i] = -1;
    }
    sumSize += size;
  }

  // --- Calculate ratio (if the sum size is too long)
  const ratio = sumSize > hostSize ? hostSize / sumSize : 1;
  let sumPercentage = 0;
  
  // --- Calculate percentages for explicitly sized columns
  for (let i = 0; i < initialSizes.length; i++) {
    if (percentages[i] < 0) continue;
    percentages[i] = 100 * (percentages[i] / ratio / hostSize);
    sumPercentage += percentages[i];
  }
  // --- Calculate the percentages for unsized columns
  for (let i = 0; i < percentages.length; i++) {
    if (percentages[i] >= 0) continue;
    percentages[i] = (100 - sumPercentage) / implicit;
  }

  // --- Done.
  return percentages;
}
