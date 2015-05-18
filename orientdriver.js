/*
 *
 * @function
 * @name OrientDB
 * @description Get GraphDatabase from oriento npm package
 *
 */
this.OrientDB = (function() {
  /*
   *
   * @function
   * @name OrientDB
   * @param config {object} - config object for connecting to db
   * @description Get GraphDatabase from node-oriendriver npm package
   *
   */
  function OrientDB(config) {

    var  GraphDatabase = null;
    this.Oriento = Meteor.npmRequire('oriento');


    var server = this.Oriento({
      host: config.host || '0.0.0.0',
      port: config.port || 2424,
      username: config.username || 'foo',
      password: config.password || 'bar'
    });
    GraphDatabase = server.use( config.database || 'test' );
    return GraphDatabase;
  }

  return OrientDB;
})();

Meteor.OrientDB = this.OrientDB;
