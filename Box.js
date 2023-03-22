AFRAME.registerComponent("move-box", {
    schema: {
        rotation: { type: "number", default: 90},
        moveX: { type: "number", default: 1 },
    },
    tick: function () {
        this.data.rotation += 90;
        this.data.moveX += 0.01;
        var rot = this.el.getAttribute("rotation");
        var pos = this.el.getAttribute("position");
        rot = this.data.rotation;
        pos.x = this.data.moveX;
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
        this.el.setAttribute("rotation", { x: rot.x, y: rot.y, z: rot.z });
    }
});
