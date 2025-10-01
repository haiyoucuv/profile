#version 300 es
precision highp float;

uniform sampler2D u_image;
uniform sampler3D u_lut;
uniform float u_intensity;
uniform float u_brightness;
uniform float u_contrast;
uniform float u_saturation;
uniform float u_hue;

in vec2 v_texCoord;
out vec4 fragColor;

vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    vec4 color = texture(u_image, v_texCoord);

    // 基础调整
    color.rgb = (color.rgb - 0.5) * u_contrast + 0.5 + u_brightness;

    // 色相饱和度调整
    vec3 hsv = rgb2hsv(color.rgb);
    hsv.x = fract(hsv.x + u_hue);
    hsv.y *= u_saturation;
    color.rgb = hsv2rgb(hsv);

    // 应用LUT
    vec3 lutCoord = clamp(color.rgb, 0.0, 1.0);
    vec3 lutColor = texture(u_lut, lutCoord).rgb;

    // 混合
    color.rgb = mix(color.rgb, lutColor, u_intensity);

    fragColor = vec4(color.rgb, color.a);
}

