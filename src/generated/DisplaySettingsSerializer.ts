// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { DisplaySettings } from "@src/DisplaySettings";
import { JsonHelper } from "@src/io/JsonHelper";
import { RenderingResourcesSerializer } from "@src/generated/RenderingResourcesSerializer";
import { LayoutMode } from "@src/LayoutMode";
import { StaveProfile } from "@src/StaveProfile";
import { SystemsLayoutMode } from "@src/DisplaySettings";
export class DisplaySettingsSerializer {
    public static fromJson(obj: DisplaySettings, m: unknown): void {
        if (!m) {
            return;
        }
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k.toLowerCase(), v));
    }
    public static toJson(obj: DisplaySettings | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        }
        const o = new Map<string, unknown>();
        o.set("scale", obj.scale);
        o.set("stretchforce", obj.stretchForce);
        o.set("layoutmode", obj.layoutMode as number);
        o.set("staveprofile", obj.staveProfile as number);
        o.set("barsperrow", obj.barsPerRow);
        o.set("startbar", obj.startBar);
        o.set("barcount", obj.barCount);
        o.set("barcountperpartial", obj.barCountPerPartial);
        o.set("justifylastsystem", obj.justifyLastSystem);
        o.set("resources", RenderingResourcesSerializer.toJson(obj.resources));
        o.set("padding", obj.padding);
        o.set("systemslayoutmode", obj.systemsLayoutMode as number);
        return o;
    }
    public static setProperty(obj: DisplaySettings, property: string, v: unknown): boolean {
        switch (property) {
            case "scale":
                obj.scale = v! as number;
                return true;
            case "stretchforce":
                obj.stretchForce = v! as number;
                return true;
            case "layoutmode":
                obj.layoutMode = JsonHelper.parseEnum<LayoutMode>(v, LayoutMode)!;
                return true;
            case "staveprofile":
                obj.staveProfile = JsonHelper.parseEnum<StaveProfile>(v, StaveProfile)!;
                return true;
            case "barsperrow":
                obj.barsPerRow = v! as number;
                return true;
            case "startbar":
                obj.startBar = v! as number;
                return true;
            case "barcount":
                obj.barCount = v! as number;
                return true;
            case "barcountperpartial":
                obj.barCountPerPartial = v! as number;
                return true;
            case "justifylastsystem":
                obj.justifyLastSystem = v! as boolean;
                return true;
            case "padding":
                obj.padding = v as number[] | null;
                return true;
            case "systemslayoutmode":
                obj.systemsLayoutMode = JsonHelper.parseEnum<SystemsLayoutMode>(v, SystemsLayoutMode)!;
                return true;
        }
        if (["resources"].indexOf(property) >= 0) {
            RenderingResourcesSerializer.fromJson(obj.resources, v as Map<string, unknown>);
            return true;
        }
        else {
            for (const c of ["resources"]) {
                if (property.indexOf(c) === 0) {
                    if (RenderingResourcesSerializer.setProperty(obj.resources, property.substring(c.length), v)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
