const {
    createSession,
    closeSession,
    startWebDriver,
    stopWebDriver,
    client
  } = require('nightwatch-api');
  
  async function setup(env = 'default') {
    await startWebDriver({ env });
    await createSession({ env });
  }
  
  async function shutdown() {
    await closeSession();
    await stopWebDriver();
  }
  
  async function run() {
    await client.url('http://localhost:8080/');
    let title;
    await client.getTitle(t => (title = t));
    await client.assert.title('Hello Title');
    await client.assert.containsText('body', 'world from CI')
    console.log(title);
  }
  
  (async function() {
    try {
      await setup('default');
      await run();
    } catch (err) {
      console.log(err.stack);
    } finally {
      await shutdown();
    }
  })()