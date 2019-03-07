function crossProduct(vec1, vec2) {
    return {
        x:vec1.y * vec2.z - vec1.z * vec2.y,
        y:vec1.z * vec2.x - vec1.x * vec2.z,
        z:vec1.x * vec2.y - vec1.y * vec2.x
    };
}

function innerProduct(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
}

function vectorAdd(vec1, vec2) {
    return {
        x:vec1.x + vec2.x,
        y:vec1.y + vec2.y,
        z:vec1.z + vec2.z
    };
}

function vectorSub(vec1, vec2) {
    return {
        x:vec1.x - vec2.x,
        y:vec1.y - vec2.y,
        z:vec1.z - vec2.z
    };
}

function vectorMul(vec, scalar) {
    return {
        x:vec.x * scalar,
        y:vec.y * scalar,
        z:vec.z * scalar
    };
}

function vectorScaleSq(vec) {
    return Math.pow(vec.x, 2) + Math.pow(vec.y, 2) + Math.pow(vec.z, 2);
}

function vectorScale(vec) {
    return Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2) + Math.pow(vec.z, 2));
}

function toUnitVector(vec) {
    return vectorMul(vec, 1/vectorScale(vec));
}

function pseudoCrossProduct(vec) {
    return {
        x:-vec.y,
        y:vec.x,
        z:vec.z
    };
}