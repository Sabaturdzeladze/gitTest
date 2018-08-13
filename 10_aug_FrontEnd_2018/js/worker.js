let functions = {};

self.addEventListener("message", function(e) {
  let result = null;

  try {
    switch (e.data.type) {
      case "registerFunction":
        // add.apply(this, e.data.nums);

        functions[e.data.name] = new Function(e.data.parameters, e.data.body);

        break;

      // case 'sub':

      //     sub.apply(this, e.data.nums);

      // break;

      case "doLazy":
        for (let i = 0; i < 10000000000; i++) {}

        self.postMessage("doLazy");

        break;

      default:
        if (functions[e.data.type]) {
          result = {
            isError: false,

            value: functions[e.data.type].apply(null, e.data.nums)
          };
        }
    }
  } catch (error) {
    result = {
      isError: true,

      value: error
    };
  }

  this.postMessage({
    processId: e.data.processId,

    result: result
  });
});
