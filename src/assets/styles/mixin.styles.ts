import { css, RuleSet } from "styled-components";
import { Interpolation, NoInfer, Styles } from "styled-components/dist/types";

const device = {
	xs: "375px",
	sm: "480px",
	md: "768px",
	lg: "1024px",
	xl: "1200px",
	xxl: "1400px",
};

type MediaQuery = <Props extends object>(styles: Styles<NoInfer<Props>>, ...interpolations: Interpolation<NoInfer<Props>>[]) => RuleSet<NoInfer<Props>>;

export const media: { [key in keyof typeof device]: MediaQuery } = {
	xs: (...args) => css`
		@media (max-width: ${device.xs}) {
			${css(...args)};
		}
	`,
	sm: (...args) => css`
		@media (max-width: ${device.sm}) {
			${css(...args)};
		}
	`,
	md: (...args) => css`
		@media (max-width: ${device.md}) {
			${css(...args)};
		}
	`,
	lg: (...args) => css`
		@media (max-width: ${device.lg}) {
			${css(...args)};
		}
	`,
	xl: (...args) => css`
		@media (max-width: ${device.xl}) {
			${css(...args)};
		}
	`,
	xxl: (...args) => css`
		@media (max-width: ${device.xxl}) {
			${css(...args)};
		}
	`,
};
