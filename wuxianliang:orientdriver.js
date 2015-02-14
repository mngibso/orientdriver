/*jshint strict:false */
/*global Meteor:false */
/*global process:false */
/*global _n4j:false */
/*global HTTP:false */
/*global console:false */
/*global _:false */

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
   * @param url {string} - url to Neo4j database
   * @description Get GraphDatabase from node-neo4j npm package
   *
   */
  function OrientDB(url) {

    //var _this = this;

    //this.message = ' connection to OrientDB, please check your settings and what OrientDB is running. Note: URL to OrientDB database is better to set via environment variable ORIENTDB_URL or GRAPHENEDB_URL';
    //this.warning = 'OrientDB is not ready, check your settings and DB availability';
    //this.ready = false;
    //this.url = (url != null) ? url : process.env['ORIENTDB_URL'] || process.env['GRAPHENEDB_URL'] || 'http://localhost:2480';

    /*
     * Check connection to Neo4j
     * If something is wrong - throw message
     */
    //try {
    //  var httpRes = HTTP.call('GET', this.url);
    //  if(httpRes.statusCode === 200){
    //    this.ready = true;
    //    console.log('Meteor is successfully connected to OrientDB on ' + this.url);
    //  }else{
    //    console.log('Bad' + this.message, httpRes.toString());
    //  }
    //} catch (e) {
    //  console.log('No' + this.message, e.toString());
    //}

    this.Oriento = Meteor.npmRequire('oriento');
    orient = this.Oriento;


    var server = _orient({
      host: '0.0.0.0',
      port: 2424,
      username: 'root',
      password: '235711'
    });
    var GraphDatabase = server.use 'GratefulDeadConcerts'
    //GraphDatabase.callbacks = [];

    /*
     *
     * @function
     * @namespace N4j.GraphDatabase
     * @name query
     * @param query {String}      - The Cypher query. NOTE: Can't be multi-line.
     * @param opts {Object}       - A map of parameters for the Cypher query.
     * @param callback {function} - Callback function
     * @description Replace standard GraphDatabase.query method
     *              Add functionality of callbacks which runs on every query execution
     *
     */
    /*
    GraphDatabase.query = function(query, opts, callback){
      if(_this.ready){
        return _orient({host: 'localhost', port: 2480, username: 'root', password: '235711'}).query(query, opts, function(err, results){
          _.forEach(GraphDatabase.callbacks, function(cb){
            if(cb){
              cb(query, opts);
            }
          });

          if(callback){
            callback(err, results);
          }
        });
      }else{
        console.log('GraphDatabase.query', _this.warning);
      }
    };
   */
    /*
     *
     * @function
     * @namespace N4j.GraphDatabase
     * @name listen
     * param callback {function} - Callback function with:
    *                                 @param query {String} - The Cypher query. NOTE: Can't be multi-line.
    *                                 @param opts {Object}  - A map of parameters for the Cypher query.
     * @description Add callback function
     *
     */
    /*  GraphDatabase.listen = function(callback){
      if(_this.ready){
        GraphDatabase.callbacks.push(callback);
      }else{
        console.log('GraphDatabase.listen', _this.warning);
      }
    };
   */
    return GraphDatabase;
  }

  return OrientDB;
})();

Meteor.OrientDB = this.OrientDB;
