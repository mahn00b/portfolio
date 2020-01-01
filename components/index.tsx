import * as React from 'react'
import './tachyons_raw.css'
import { css_keys } from './tachyons_raw'
import * as classnames from 'classnames'

const Tachyons = css_keys as any

export const Container = component<React.HTMLAttributes<HTMLDivElement>>('div')
export const Image = component<React.HTMLAttributes<HTMLDivElement>>('img')
export const Input = component<React.HTMLAttributes<HTMLDivElement>>('input')
export const Main = component<React.HTMLAttributes<HTMLDivElement>>('main')
export const Nav = component<React.HTMLAttributes<HTMLDivElement>>('nav')
export const Section = component<React.HTMLAttributes<HTMLDivElement>>('section')
export const Header = component<React.HTMLAttributes<HTMLDivElement>>('header');
export const A = component<React.HTMLAttributes<HTMLDivElement>>("a");

export function component<P>(
    Component:
        string |
        React.FunctionComponent<P & typeof Tachyons> |
        React.StatelessComponent<P & typeof Tachyons> |
        React.ComponentClass<P & typeof Tachyons, any>,
    forced = {} as P & typeof Tachyons): React.ComponentClass<P & typeof Tachyons> {
    const { className: forced_className, style: forced_style, ...forced_rest } = forced as any
    return class extends React.Component<P & typeof Tachyons> {
        render() {
            const { className: input_className, style: input_style, children, ...input_rest } = this.props as any
            const rest = {
                ...input_rest,
                ...forced_rest
            }
            const classes: any = {}
            for (let key of Object.keys(rest)) {
                if (Boolean(Tachyons[key] as any)) {
                    classes[key] = rest[key]
                    delete rest[key]
                }
            }
            return (
                <Component
                    className={(classnames.default || classnames)(input_className, forced_className, classes)}
                    style={{
                        ...forced_style,
                        ...input_style,
                    }}
                    {...rest}
                >
                    {children}
                </Component>
            )
        }
    }
}