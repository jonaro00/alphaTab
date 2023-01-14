// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { Tuning } from "@src/model/Tuning";
import { JsonHelper } from "@src/io/JsonHelper";
export class TuningSerializer {
    public static fromJson(obj: Tuning, m: unknown): void {
        if (!m) {
            return;
        }
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k, v));
    }
    public static toJson(obj: Tuning | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        }
        const o = new Map<string, unknown>();
        o.set("isstandard", obj.isStandard);
        o.set("name", obj.name);
        o.set("tunings", obj.tunings);
        return o;
    }
    public static setProperty(obj: Tuning, property: string, v: unknown): boolean {
        switch (property) {
            case "isstandard":
                obj.isStandard = v! as boolean;
                return true;
            case "name":
                obj.name = v! as string;
                return true;
            case "tunings":
                obj.tunings = v! as number[];
                return true;
        }
        return false;
    }
}
