/**
 * User Journey Script for https://www.infoservices.com/
 *
 * Simulates a real user:
 *   1. Lands on the homepage
 *   2. Scrolls through the homepage (triggers lazy-loaded content)
 *   3. Navigates to "Who We Are" (About Us)
 *   4. Navigates to "Capabilities"
 *   5. Navigates to "Industries"
 *   6. Navigates to "Careers"
 *   7. Navigates to "Contact"
 *
 * Each step gets its own metrics in the HTML report and Grafana.
 *
 * Run:
 *   node bin/sitespeed.js --script scripts/infoservices-journey.js --browser chrome -n 3
 *
 * With Grafana:
 *   node bin/sitespeed.js --script scripts/infoservices-journey.js --browser chrome -n 3 --graphite.host localhost
 */

export default async function (context, commands) {

  // ─── Step 1: Homepage ──────────────────────────────────────────────────────
  context.log.info('Step 1: Loading Homepage...');
  await commands.measure.start('Homepage');
  await commands.navigate('https://www.infoservices.com/');
  await commands.measure.stop();

  // ─── Step 2: Scroll through homepage (triggers lazy images / sections) ──────
  context.log.info('Step 2: Scrolling through Homepage...');
  await commands.wait.byTime(1500);
  for (let i = 1; i <= 4; i++) {
    await commands.js.run(
      `window.scrollTo({ top: document.body.scrollHeight * ${i / 4}, behavior: 'smooth' })`
    );
    await commands.wait.byTime(1500);
  }
  await commands.js.run(`window.scrollTo({ top: 0, behavior: 'smooth' })`);
  await commands.wait.byTime(1000);

  // ─── Step 3: Who We Are (About Us) ─────────────────────────────────────────
  context.log.info('Step 3: Navigating to Who We Are (About Us)...');
  await commands.measure.start('WhoWeAre');
  await commands.navigate('https://www.infoservices.com/about-us');
  await commands.measure.stop();
  await commands.wait.byTime(1000);

  // ─── Step 4: Capabilities ──────────────────────────────────────────────────
  context.log.info('Step 4: Navigating to Capabilities...');
  await commands.measure.start('Capabilities');
  await commands.navigate('https://www.infoservices.com/capabilities');
  await commands.measure.stop();
  await commands.wait.byTime(1000);

  // ─── Step 5: Industries ────────────────────────────────────────────────────
  context.log.info('Step 5: Navigating to Industries...');
  await commands.measure.start('Industries');
  await commands.navigate('https://www.infoservices.com/industries');
  await commands.measure.stop();
  await commands.wait.byTime(1000);

  // ─── Step 6: Careers ───────────────────────────────────────────────────────
  context.log.info('Step 6: Navigating to Careers...');
  await commands.measure.start('Careers');
  await commands.navigate('https://www.infoservices.com/careers');
  await commands.measure.stop();
  await commands.wait.byTime(1000);

  // ─── Step 7: Contact ───────────────────────────────────────────────────────
  context.log.info('Step 7: Navigating to Contact...');
  await commands.measure.start('Contact');
  await commands.navigate('https://www.infoservices.com/contact');
  await commands.measure.stop();
}
