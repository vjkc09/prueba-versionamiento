'use strict'

module.exports.get = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'recurso get',
        input: event,
      },
      null,
      2
    ),
  }

}
