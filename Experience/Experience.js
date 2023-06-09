import * as THREE from "three";
import {instance} from "three/nodes";
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";

export default class Experience{

    static instance
    constructor(canvas) {
        if (Experience.instance){
            return Experience.instance
        }
        Experience.instance = this
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();

        this.time.on("update", ()=>{
            this.update();
        });

        this.sizes.on("resize", ()=>{
            this.resize();
        });
    }
    resize(){
        this.camera.resize();
        this.renderer.resize();
    }
    update(){
        this.camera.update();
        this.renderer.update();
    }
}