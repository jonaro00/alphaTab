// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { NotationSettings } from "@src/NotationSettings";
import { JsonHelper } from "@src/io/JsonHelper";
import { NotationMode } from "@src/NotationSettings";
import { FingeringMode } from "@src/NotationSettings";
import { NotationElement } from "@src/NotationSettings";
import { TabRhythmMode } from "@src/NotationSettings";
export class NotationSettingsSerializer {
    public static fromJson(obj: NotationSettings, m: unknown): void {
        if (!m) {
            return;
        }
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k.toLowerCase(), v));
    }
    public static toJson(obj: NotationSettings | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        }
        const o = new Map<string, unknown>();
        o.set("notationmode", obj.notationMode as number);
        o.set("fingeringmode", obj.fingeringMode as number);
        {
            const m = new Map<string, unknown>();
            o.set("elements", m);
            for (const [k, v] of obj.elements!) {
                m.set(k.toString(), v);
            }
        }
        o.set("rhythmmode", obj.rhythmMode as number);
        o.set("rhythmheight", obj.rhythmHeight);
        o.set("transpositionpitches", obj.transpositionPitches);
        o.set("displaytranspositionpitches", obj.displayTranspositionPitches);
        o.set("smallgracetabnotes", obj.smallGraceTabNotes);
        o.set("extendbendarrowsontiednotes", obj.extendBendArrowsOnTiedNotes);
        o.set("extendlineeffectstobeatend", obj.extendLineEffectsToBeatEnd);
        o.set("slurheight", obj.slurHeight);
        return o;
    }
    public static setProperty(obj: NotationSettings, property: string, v: unknown): boolean {
        switch (property) {
            case "notationmode":
                obj.notationMode = JsonHelper.parseEnum<NotationMode>(v, NotationMode)!;
                return true;
            case "fingeringmode":
                obj.fingeringMode = JsonHelper.parseEnum<FingeringMode>(v, FingeringMode)!;
                return true;
            case "elements":
                obj.elements = new Map<NotationElement, boolean>();
                JsonHelper.forEach(v, (v, k) => {
                    obj.elements.set(JsonHelper.parseEnum<NotationElement>(k, NotationElement)!, v as boolean);
                });
                return true;
            case "rhythmmode":
                obj.rhythmMode = JsonHelper.parseEnum<TabRhythmMode>(v, TabRhythmMode)!;
                return true;
            case "rhythmheight":
                obj.rhythmHeight = v! as number;
                return true;
            case "transpositionpitches":
                obj.transpositionPitches = v! as number[];
                return true;
            case "displaytranspositionpitches":
                obj.displayTranspositionPitches = v! as number[];
                return true;
            case "smallgracetabnotes":
                obj.smallGraceTabNotes = v! as boolean;
                return true;
            case "extendbendarrowsontiednotes":
                obj.extendBendArrowsOnTiedNotes = v! as boolean;
                return true;
            case "extendlineeffectstobeatend":
                obj.extendLineEffectsToBeatEnd = v! as boolean;
                return true;
            case "slurheight":
                obj.slurHeight = v! as number;
                return true;
        }
        return false;
    }
}
