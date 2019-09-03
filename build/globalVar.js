/**
 * npm run build test / pre / pro
 */
const cmdName = process.argv[2];
let data;
if (cmdName === 'pro') {
  data = {
    base:"'https://www.easy-mock.com/mock/5cd517e8e9dd794d9590d12d/example_copy_copy'"
  };
} else {
  data = {
    // base:"'https://www.easy-mock.com/mock/5cd517e8e9dd794d9590d12d/example_copy_copy'"
    base:"'/api'"
  };
}

module.exports = data;