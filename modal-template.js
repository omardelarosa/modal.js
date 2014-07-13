var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modal-template.hbs'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n    <h1 class='modal-title'>"
    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n  ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n    <div class=\"modal-controls\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.buttons), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n    </div>\n  ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "\n        <button class=\"btn js-button "
    + escapeExpression(((stack1 = (depth0 && depth0.className)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\n      ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"modal-overlay\">\n  <div class=\"modal-content js-modal\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"js-content\">\n\n  </div>\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.buttons)),stack1 == null || stack1 === false ? stack1 : stack1.length), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n  </div>\n</div>";
},"useData":true});
