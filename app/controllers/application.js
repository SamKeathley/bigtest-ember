import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    increment() {
      this.set('count', this.get('count') + 1)
    }
  },
  count: 0
});
