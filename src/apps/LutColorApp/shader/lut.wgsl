struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) texCoord: vec2<f32>,
}

struct Uniforms {
    intensity: f32,
    brightness: f32,
    contrast: f32,
    saturation: f32,
    hue: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;
@group(0) @binding(1) var imageSampler: sampler;
@group(0) @binding(2) var imageTexture: texture_2d<f32>;
@group(0) @binding(3) var lutSampler: sampler;
@group(0) @binding(4) var lutTexture: texture_3d<f32>;

@vertex
fn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
    var pos = array<vec2<f32>, 6>(
        vec2<f32>(-1.0, -1.0),
        vec2<f32>(1.0, -1.0),
        vec2<f32>(-1.0, 1.0),
        vec2<f32>(1.0, -1.0),
        vec2<f32>(1.0, 1.0),
        vec2<f32>(-1.0, 1.0)
    );

    var texCoord = array<vec2<f32>, 6>(
        vec2<f32>(0.0, 1.0),
        vec2<f32>(1.0, 1.0),
        vec2<f32>(0.0, 0.0),
        vec2<f32>(1.0, 1.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(0.0, 0.0)
    );

    var output: VertexOutput;
    output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
    output.texCoord = texCoord[vertexIndex];
    return output;
}

fn rgb2hsv(c: vec3<f32>) -> vec3<f32> {
    let K = vec4<f32>(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    let p = mix(vec4<f32>(c.bg, K.wz), vec4<f32>(c.gb, K.xy), step(c.b, c.g));
    let q = mix(vec4<f32>(p.xyw, c.r), vec4<f32>(c.r, p.yzx), step(p.x, c.r));
    let d = q.x - min(q.w, q.y);
    let e = 1.0e-10;
    return vec3<f32>(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

fn hsv2rgb(c: vec3<f32>) -> vec3<f32> {
    let K = vec4<f32>(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    let p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, vec3<f32>(0.0), vec3<f32>(1.0)), c.y);
}

@fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {
    var color = textureSample(imageTexture, imageSampler, input.texCoord);

          // 应用基础调整
    var adjustedRgb = (color.rgb - vec3<f32>(0.5)) * uniforms.contrast + vec3<f32>(0.5) + vec3<f32>(uniforms.brightness);
    color = vec4<f32>(adjustedRgb, color.a);

          // 色相和饱和度调整
    var hsv = rgb2hsv(color.rgb);
    hsv.x = fract(hsv.x + uniforms.hue);
    hsv.y = hsv.y * uniforms.saturation;
    var hsvRgb = hsv2rgb(hsv);
    color = vec4<f32>(hsvRgb, color.a);

          // 应用LUT
    let lutCoord = clamp(color.rgb, vec3<f32>(0.0), vec3<f32>(1.0));
    let lutColor = textureSample(lutTexture, lutSampler, lutCoord);

          // 混合原色和LUT颜色
    let finalRgb = mix(color.rgb, lutColor.rgb, uniforms.intensity);

    return vec4<f32>(finalRgb, color.a);
}
