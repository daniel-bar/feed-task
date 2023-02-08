declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly PORT: string;
			readonly DATA_URL: string;
		}
	}
}

export {};
