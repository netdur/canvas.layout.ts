import { Canvas } from "../core/Canvas";

export function AttachLogger() {
	return (target: any) => {
		Canvas.attachedLoggers.push(target.name);
	}
}

export function Log(igonore?: boolean, trace?: boolean) {
	return (target: any, key: string, descriptor: any) => {
		const originalMethod = descriptor.value;
		descriptor.value =  function (...args: any[]) {
			let a = args.map(a => JSON.stringify(a)).join();
			let result = originalMethod.apply(this, args);
			let r = JSON.stringify(result);
			if (Canvas.debug && igonore != false) {
				if (Canvas.attachedLoggers.indexOf(target.constructor.name) !== -1) {
					if (trace) console.trace();
					console.log(`${target.constructor.name}::${key}`);
					console.log(`Call: ${key}(${a}) => ${r}`);
				}
			}
			return result;
		}
		return descriptor;
	}
}
