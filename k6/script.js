import { browser } from 'k6/browser';

export let options = {
  thresholds: {},
  scenarios: {
    noHints: {
      vus: 1,
      iterations: 20,
      executor: 'shared-iterations',
      exec: 'noHints',
      tags: { type: 'noHints' },
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
    headerHints: {
      vus: 1,
      iterations: 20,
      executor: 'shared-iterations',
      exec: 'headerHints',
      tags: { type: 'headerHints' },
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
    earlyHints: {
      vus: 1,
      iterations: 20,
      executor: 'shared-iterations',
      exec: 'earlyHints',
      tags: { type: 'earlyHints' },
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
};

for (let key in options.scenarios) {
  // Each scenario automaticall tags the metrics it generates with its own name
  let thresholdName = `browser_web_vital_cls{scenario:${key}}`;
  // Check to prevent us from overwriting a threshold that already exists
  if (!options.thresholds[thresholdName]) {
      options.thresholds[thresholdName] = [];
  }
  // 'max>=0' is a bogus condition that will always be fulfilled
  options.thresholds[thresholdName].push('max>=0');

  // Each scenario automaticall tags the metrics it generates with its own name
  thresholdName = `browser_web_vital_fcp{scenario:${key}}`;
  // Check to prevent us from overwriting a threshold that already exists
  if (!options.thresholds[thresholdName]) {
      options.thresholds[thresholdName] = [];
  }
  // 'max>=0' is a bogus condition that will always be fulfilled
  options.thresholds[thresholdName].push('max>=0');

  thresholdName = `browser_web_vital_lcp{scenario:${key}}`;
  // Check to prevent us from overwriting a threshold that already exists
  if (!options.thresholds[thresholdName]) {
      options.thresholds[thresholdName] = [];
  }
  // 'max>=0' is a bogus condition that will always be fulfilled
  options.thresholds[thresholdName].push('max>=0');

  thresholdName = `browser_web_vital_ttfb{scenario:${key}}`;
  // Check to prevent us from overwriting a threshold that already exists
  if (!options.thresholds[thresholdName]) {
      options.thresholds[thresholdName] = [];
  }
  // 'max>=0' is a bogus condition that will always be fulfilled
  options.thresholds[thresholdName].push('max>=0');
}


export async function noHints() {
  const page = await browser.newPage();

  try {
    await page.goto('https://www.earlyhints.xyz/no-hints');
  } finally {
    await page.close();
  }
}

export async function headerHints() {
    const page = await browser.newPage();

    try {
      await page.goto('https://www.earlyhints.xyz/header-hints');
    } finally {
      await page.close();
    }
}

export async function earlyHints() {
  const page = await browser.newPage();

  try {
    await page.goto('https://www.earlyhints.xyz/early-hints');
  } finally {
    await page.close();
  }

}
