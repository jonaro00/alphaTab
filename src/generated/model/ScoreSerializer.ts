// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { Score } from "@src/model/Score";
import { JsonHelper } from "@src/io/JsonHelper";
import { MasterBarSerializer } from "@src/generated/model/MasterBarSerializer";
import { TrackSerializer } from "@src/generated/model/TrackSerializer";
import { RenderStylesheetSerializer } from "@src/generated/model/RenderStylesheetSerializer";
import { MasterBar } from "@src/model/MasterBar";
import { Track } from "@src/model/Track";
export class ScoreSerializer {
    public static fromJson(obj: Score, m: unknown): void {
        if (!m) {
            return;
        } 
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k.toLowerCase(), v)); 
    }
    public static toJson(obj: Score | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        } 
        const o = new Map<string, unknown>(); 
        o.set("album", obj.album); 
        o.set("artist", obj.artist); 
        o.set("copyright", obj.copyright); 
        o.set("instructions", obj.instructions); 
        o.set("music", obj.music); 
        o.set("notices", obj.notices); 
        o.set("subTitle", obj.subTitle); 
        o.set("title", obj.title); 
        o.set("words", obj.words); 
        o.set("tab", obj.tab); 
        o.set("tempo", obj.tempo); 
        o.set("tempoLabel", obj.tempoLabel); 
        o.set("masterBars", obj.masterBars.map(i => MasterBarSerializer.toJson(i))); 
        o.set("tracks", obj.tracks.map(i => TrackSerializer.toJson(i))); 
        o.set("stylesheet", RenderStylesheetSerializer.toJson(obj.stylesheet)); 
        return o; 
    }
    public static setProperty(obj: Score, property: string, v: unknown): boolean {
        switch (property) {
            case "album":
                obj.album = v! as string;
                return true;
            case "artist":
                obj.artist = v! as string;
                return true;
            case "copyright":
                obj.copyright = v! as string;
                return true;
            case "instructions":
                obj.instructions = v! as string;
                return true;
            case "music":
                obj.music = v! as string;
                return true;
            case "notices":
                obj.notices = v! as string;
                return true;
            case "subtitle":
                obj.subTitle = v! as string;
                return true;
            case "title":
                obj.title = v! as string;
                return true;
            case "words":
                obj.words = v! as string;
                return true;
            case "tab":
                obj.tab = v! as string;
                return true;
            case "tempo":
                obj.tempo = v! as number;
                return true;
            case "tempolabel":
                obj.tempoLabel = v! as string;
                return true;
            case "masterbars":
                obj.masterBars = [];
                for (const o of v as (Map<string, unknown> | null)[]) {
                    const i = new MasterBar();
                    MasterBarSerializer.fromJson(i, o)
                    obj.addMasterBar(i);
                }
                return true;
            case "tracks":
                obj.tracks = [];
                for (const o of v as (Map<string, unknown> | null)[]) {
                    const i = new Track();
                    TrackSerializer.fromJson(i, o)
                    obj.addTrack(i);
                }
                return true;
        } 
        if (["stylesheet"].indexOf(property) >= 0) {
            RenderStylesheetSerializer.fromJson(obj.stylesheet, v as Map<string, unknown>);
            return true;
        } 
        return false; 
    }
}
