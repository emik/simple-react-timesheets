//store a this ref, and
export default function waitToRender(reactComponent, callback) {
    window.requestAnimationFrame(function() {
        var node = reactComponent.getDOMNode();
        if (node !== undefined) {
            callback();
        }
    });
}