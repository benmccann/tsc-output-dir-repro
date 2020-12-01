var _mapqqq;
export function read_only_form_data() {
    const map = new Map();
    return {
        append(key, value) {
            if (map.has(key)) {
                map.get(key).push(value);
            }
            else {
                map.set(key, [value]);
            }
        },
        data: new ReadOnlyFormData(map)
    };
}
class ReadOnlyFormData {
    constructor(map) {
        _mapqqq.set(this, void 0);
        this. = map;
    }
    get(key) {
        var _a;
        return (_a = this..get(key)) === null || _a === void 0 ? void 0 : _a[0];
    }
    getAll(key) {
        return this..get(key);
    }
    has(key) {
        return this..has(key);
    }
    *[(_mapqqq = new WeakMap(), Symbol.iterator)]() {
        for (const [key, value] of this.) {
            for (let i = 0; i < value.length; i += 1) {
                yield [key, value[i]];
            }
        }
    }
    *entries() {
        for (const [key, value] of this.) {
            for (let i = 0; i < value.length; i += 1) {
                yield [key, value[i]];
            }
        }
    }
    *keys() {
        for (const [key, value] of this.) {
            for (let i = 0; i < value.length; i += 1) {
                yield key;
            }
        }
    }
    *values() {
        for (const [, value] of this.) {
            for (let i = 0; i < value.length; i += 1) {
                yield value;
            }
        }
    }
}
