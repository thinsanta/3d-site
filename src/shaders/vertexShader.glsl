uniform float uBigWavesElevation;
uniform vec2 uBigWavesFrequency;
uniform float uTime;
varying vec2 vUv;
varying float vElevation;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float wave = sin(modelPosition.x * uBigWavesFrequency.x + uTime * 2.0) *
                 sin(modelPosition.z * uBigWavesFrequency.y + uTime * 2.0) *
                 uBigWavesElevation;

    modelPosition.y += wave;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
  
    gl_Position = projectedPosition;

    vUv = uv;

    vElevation = wave;
}