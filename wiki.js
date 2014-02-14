/* 
 * Generate the events array from
 *
 * http://en.wikipedia.org/wiki/Timeline_of_modern_history
 */

$('#mw-content-text li').map(function(index, item) {
  var html = $(item).html(),
      match = html && html.split(/:(.+)?/);

  if (match && match.length > 1) {

    var year = Number(match[0].match(/\d+/));

    var node = $('<p>' + match[1] + '</p>');

    node.contents().each(function(index, item) {
      if (item.nodeType === 3) {
        item.nodeValue = item.nodeValue.replace('.', '|');
      }
    });

    return node.html().split('|').map($.trim).filter(Boolean).map(function(event) {
      return { year: year, event: event };
    });
  }

  return null;
}).toArray().filter(Boolean);
