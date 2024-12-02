varying vec2 vUv;
varying float vElevation;

uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;


void main()
{
/*     float strength = step(0.8, mod(vUv.y * 50.0, 1.0));
    strength *= step(0.8, mod(vUv.x * 50.0, 1.0));
    gl_FragColor = vec4(0.0, strength, strength, 0.0); */

    vec3 color = mix(uDepthColor, uSurfaceColor, vElevation * 2.0 + 0.1);

    gl_FragColor = vec4(color, 1.0);
}