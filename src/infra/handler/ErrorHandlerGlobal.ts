export class ErrorhandlerGlobal {
  static init(): void {
    process.on("uncaughtException", (error) => {
      console.error("Erro não tratado:", error);
      process.exit(1);
    });
  }
}
