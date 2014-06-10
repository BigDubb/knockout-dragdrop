var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ContainerItem = (function () {
    function ContainerItem(id, name) {
        this.Id = id;
        this.Name = name;
    }
    return ContainerItem;
})();

var Container = (function () {
    function Container() {
        this.Source = ko.observableArray();
    }
    Container.prototype.dropFromSource = function (newItem, source, target) {
        source.Source.remove(newItem);
        target.Source.push(newItem);
    };

    Container.prototype.dropFromTarget = function (oldItem, source, target) {
        target.Source.remove(oldItem);
        source.Source.push(oldItem);
    };

    Container.prototype.dragEnd = function (item, event, source) {
        source.Source.remove(item);
    };
    return Container;
})();

var Example = (function (_super) {
    __extends(Example, _super);
    function Example() {
        _super.call(this);
        this.Targets = ko.observableArray();

        this.setup();
    }
    Example.prototype.setup = function () {
        //populate source with array of items.
        var names = ["Declan", "Tessa", "Claire", "Violet", "Alice", "Mia", "Camille", "Aiden", "Erin"];

        for (var i = 0; i < names.length; i++) {
            this.Source.push(new ContainerItem(i, names[i]));
        }
    };

    Example.prototype.AddContainer = function () {
        this.Targets.push(new Container());
    };
    return Example;
})(Container);
//# sourceMappingURL=ContainerExample.js.map
