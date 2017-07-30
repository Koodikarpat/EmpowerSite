Database schema:

*locations database holds all locals, and list of years that we have data (look locations.json)
*every location has it's own database that is named after its self. this database holds every year as its own document and every year has all months and their usages.(look locationExample.json)
*server is in node.js usen express framework. Server is using port 8100 while database is ment to use default 27017

