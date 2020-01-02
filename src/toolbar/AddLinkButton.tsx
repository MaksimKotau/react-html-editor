import React, { useState, useEffect } from 'react';
import Portal from './PortalModal';
import { restoreSelection, saveSelection } from './helpers/linkHelper';
import { attributeJSSanitizer } from '../service/grayTagSanityzerService'

const AddLinkButton: React.SFC<{}> = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
    const [linkAddress, setLinkAddress] = useState<string>("");
    const [targetBlank, setTargetBlank] = useState<boolean>(false);
    const [linkText, setLinkText] = useState<string>("");
    const [selection, setSelection] = useState<Range[] | null | undefined>(null);
    const [rel, setRel] = useState<string>("");
    useEffect(() => setSelection(saveSelection()), [showModal]);
    const createLink = () => {
        if (linkAddress.length !== 0) {
            restoreSelection(selection);
            document.execCommand("insertHTML", false, `<a href="${attributeJSSanitizer(linkAddress)}" ${rel.length === 0 ? "" : ("rel='" + rel + "'")} ${targetBlank ? "target=_blank" : ""}>${linkText}</a>`)
            setShowModal(false);
            setAnchorEl(undefined);
            setLinkAddress("");
            setTargetBlank(false);
            setRel("");
        }
    }
    const onCancel = () => {
        setShowModal(false);
        setAnchorEl(undefined);
        setLinkAddress("");
        setTargetBlank(false);
        setRel("");
    }
    return (
        <React.Fragment>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
                <span
                    style={{ display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", fontWeight: 800 }}
                    onClick={(e) => {
                        const selection = document.getSelection();
                        if (selection !== null) {
                            const textSelection: string = selection.toString();
                            setAnchorEl(e.currentTarget)
                            setShowModal(true);
                            setLinkText(textSelection);
                        }
                    }}
                >&#128279;</span>
            </div>
            {showModal && <Portal
                anchorEl={anchorEl!}
            >
                <div style={{
                    position: "fixed",
                    width: 400,
                    height: 200,
                    top: "calc(50% - 100px)",
                    left: "calc(50% - 200px)",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)",
                    padding: 20,
                    backgroundColor: "white"
                }}>
                    <div style={{ padding: 10, width: "100%" }}>
                        <label>Adress: </label>
                        <input style={{ height: 30, width: 300 }} type="text" onChange={(e) => setLinkAddress(e.target.value)} value={linkAddress} />
                    </div>
                    <div style={{ padding: 10, width: "100%" }}>
                        <label>Rel:
                        <select
                                value={rel}
                                style={{ width: 250, height: 30, marginLeft: 15 }}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setRel(e.target.value) }}
                            >
                                {relTypes.sort().map(el => {
                                    return (
                                        <option key={el} value={el}>{el}</option>
                                    )
                                })}
                            </select>
                        </label>
                    </div>
                    <div style={{ width: "100%", padding: 10 }}>
                        <label>
                            Target: blank <input style={{ marginRight: 20 }} type="checkbox" checked={targetBlank} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTargetBlank(e.currentTarget.checked)} />
                        </label>
                    </div>
                    <div style={{ padding: 10, width: "100%" }}>
                        <button style={{ padding: 5, margin: 10 }} onClick={onCancel}>Cancel</button>
                        <button style={{ padding: 5, margin: 10 }} onClick={createLink}>Ok</button>
                    </div>
                </div>
            </Portal>}
        </React.Fragment>
    );
};

export default AddLinkButton;

//https://wiki.whatwg.org/wiki/RelExtensions
const relTypes: string[] = [
    "",
    "pronunciation",
    "accessibility",
    "acquaintance",
    "admin",
    "ajax",
    "alternate",
    "answer",
    "application-manifest",
    "archives",
    "author",
    "bookmark",
    "canonical",
    "canonical-domain",
    "canonical-first",
    "canonical-human",
    "canonical-organization",
    "canonical-wwwnone",
    "chapter",
    "child",
    "co-resident",
    "co-worker",
    "colleague",
    "contact",
    "contributor",
    "crush",
    "date",
    "dns-prefetch",
    "edit",
    "edituri",
    "enclosure",
    "enlarged",
    "external",
    "extension",
    "first",
    "friend",
    "gallery",
    "glossary",
    "help",
    "hub",
    "i18nrules",
    "icon",
    "index",
    "jump",
    "kin",
    "last",
    "latest-version",
    "license",
    "login",
    "logout",
    "longdesc",
    "map",
    "me",
    "met",
    "meta",
    "muse",
    "neighbor",
    "next",
    "next-archive",
    "nofollow",
    "noreferrer",
    "noprefetch",
    "note",
    "openid.delegate",
    "openid.server",
    "openid2.local_id",
    "openid2.provider",
    "parent",
    "payment",
    "pgpkey",
    "pingback",
    "prefetch",
    "prerender",
    "presentation",
    "prev",
    "prev-archive",
    "print",
    "profile",
    "question",
    "related",
    "reply",
    "resource-package",
    "resources",
    "reviewer",
    "script",
    "search",
    "self",
    "service",
    "shortlink",
    "sibling",
    "sidebar",
    "spouse",
    "statechart",
    "stylesheet",
    "subresource",
    "sweetheart",
    "tag",
    "technicalauthor",
    "thread",
    "timesheet",
    "topic",
    "translatedfrom",
    "translator",
    "up",
    "us",
    "webmaster",
    "widget",
    "wlwmanifest"
]