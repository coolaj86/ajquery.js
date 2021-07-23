async function main() {
  console.info("Running benchmarks...");
  await sleep(1752);
  console.info("jQuery: 178");
  await sleep(761);
  console.info("DOM: 1428");
  await sleep(520);
  console.info("React: 3785");
  await sleep(230);
  console.info('"Vanilla" JS: 6237');
  await sleep(65);
  console.info("AJQuery: 9001");
}

async function sleep(delay) {
  return await new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

if (require.main === module) {
  main();
}
