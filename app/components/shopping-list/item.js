import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {

    toggleDone () {
      return this.sendAction('toggleDone', this.get('item'));
    },
    delete () {
      console.log("got to item delete");
      return this.sendAction('delete', this.get('item'));

      },
    },
  });
  console.log("ITEMS");
