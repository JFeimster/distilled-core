import Link from "next/link";
import { resolve } from "@/lib/core/data";
export function Action({target, children, className="button"}:{target:string;children:React.ReactNode;className?:string}) { const result=resolve(target); return result.href ? <Link href={result.href} className={className}>{children} <span aria-hidden="true">↗</span>{result.note && <small>{result.note}</small>}</Link> : <span className="unavailable">{children} <small>{result.note}</small></span>; }
