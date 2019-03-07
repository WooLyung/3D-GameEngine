function matrixMul(vec, matrix) {
    return {
        x: vec.x * matrix[0] + vec.y * matrix[3] + vec.z * matrix[6],
        y: vec.x * matrix[1] + vec.y * matrix[4] + vec.z * matrix[7],
        z: vec.x * matrix[2] + vec.y * matrix[5] + vec.z * matrix[8]
    };
}

function getRotationMatrix(axis, angle, angle2, angle3) {
    var c = Math.cos(angle);
    var s = Math.sin(angle);

    if (axis == 'x') {
        return [
            1, 0, 0,
            0, c, s,
            0, -s, c
        ];
    }
    else if (axis == 'y') {
        return [
            c, 0, -s,
            0, 1, 0,
            s, 0, c
        ];
    }
    else if (axis == 'z') {
        return [
            c, s, 0,
            -s, c, 0,
            0, 0, 1
        ];
    }
    else if (axis == 'xyz') {
        var Cx = Math.cos(angle);
        var Cy = Math.cos(angle2);
        var Cz = Math.cos(angle3);
        var Sx = Math.sin(angle);
        var Sy = Math.sin(angle2);
        var Sz = Math.sin(angle3);
        return [
            Cy * Cz, Cy * Sz, -Sy,
            Sx * Sy * Cz - Cx * Sz, Sx * Sy * Sz + Cx * Cz, Sx * Cy,
            Cx * Sy * Cz + Sx * Sz, Cx * Sy * Sz - Sx * Cz, Cx * Cy
        ]
    }
    else{
        axis = toUnitVector(axis);

        return [
            c + (1 - c) * Math.pow(axis.x, 2), (1 - c) * axis.x * axis.y - s * axis.z, (1 - c) * axis.x * axis.z + s * axis.y,
            (1 - c) * axis.x * axis.y + s * axis.z, c + (1 - c) * Math.pow(axis.y, 2), (1 - c) * axis.y * axis.z - s * axis.x,
            (1 - c) * axis.x * axis.z - s * axis.y, (1 - c) * axis.y * axis.z + s * axis.x, c + (1 - c) * Math.pow(axis.z, 2)
        ]
    }
}