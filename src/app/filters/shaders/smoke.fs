precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;

float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}


float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define NUM_OCTAVES 8

float fbm ( in vec2 _st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(_st);
        _st = rot * _st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}


float pattern2( in vec2 p )
{
  vec2 q = vec2( fbm( p + vec2(0.0,0.0) ),
                 fbm( p + vec2(5.2,1.3) ) );

  return fbm( p + 4.0*q );
}

float pattern3( in vec2 p )
{
    vec2 q = vec2( fbm( p + vec2(0.0,0.0) ),
                   fbm( p + vec2(5.2,1.3) ) );

    vec2 r = vec2( fbm( p + 4.0*q + vec2(1.7,9.2) ),
                   fbm( p + 4.0*q + vec2(8.3,2.8) ) );

    return fbm( p + 4.0*r );
}

float pattern4( in vec2 p, out vec2 q, out vec2 r )
 {
     q.x = fbm( p + vec2(0.0,0.0) );
     q.y = fbm( p + vec2(5.2,1.3) );

     r.x = fbm( p + 4.0*q + vec2(1.7,9.2) );
     r.y = fbm( p + 4.0*q + vec2(8.3,2.8) );

     return fbm( p + 4.0*r );
 }

void main() {

    vec2 st = gl_FragCoord.xy/u_resolution.xy*3.;
    // st += st * abs(sin(u_time*0.1)*3.0);
    vec3 color = vec3(0.0);

    vec2 q = vec2(0.);
    q.x = fbm( st + sin(.25 * u_time));
    q.y = fbm( st + vec2(1.0));
    //q.y = fbm( st + vec2(1.0)) * q.x;

    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );
    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);

    //float f = pattern(st+r);
    float f = fbm(st+r);

    color = mix(vec3(0.666667,0.166667,0.898039),
                vec3(0.1666667,0.796667,0.498039),
                clamp((f*f)*4.0,0.0,1.0));

    color = mix(color,
                vec3(0,0,0.164706),
                clamp(length(q),0.0,1.0));

    color = mix(color,
                vec3(0.1666667,0.1,0.166),
                clamp(length(r.x),0.0,1.0));


    color = mix(color,
                vec3(0.2666667,0.2666667,0.1666667),
                clamp(length(q.y),0.0,.23));


    gl_FragColor = vec4((f*f*f+1.6*f*f+.85*f)*color,1.);
    gl_FragColor = gl_FragColor * vec4(1.25);


}
