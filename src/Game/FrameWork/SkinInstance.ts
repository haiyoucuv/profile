// import { AnimationMixer, Object3D, Object3DEventMap } from "three";
// import { Component } from "./Component.ts";
// import { GameObject } from "./GameObject.ts";
//
// class SkinInstance extends Component {
//     private model: any;
//     private animRoot: any;
//     private actions: {};
//     private mixer: AnimationMixer;
//
//     constructor(gameObject: GameObject, model: any) {
//         super(gameObject);
//         this.model = model;
//         this.animRoot = SkeletonUtils.clone(this.model.gltf.scene);
//         this.mixer = new AnimationMixer(this.animRoot);
//         gameObject.transform.add(this.animRoot);
//         this.actions = {};
//     }
//
//     setAnimation(animName) {
//         const clip = this.model.animations[animName];
//         // turn off all current actions
//         for (const action of Object.values(this.actions)) {
//             action.enabled = false;
//         }
//         // get or create existing action for clip
//         const action = this.mixer.clipAction(clip);
//         action.enabled = true;
//         action.reset();
//         action.play();
//         this.actions[animName] = action;
//     }
//
//     update() {
//         this.mixer.update(globals.deltaTime);
//     }
// }