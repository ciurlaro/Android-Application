declare namespace com.myapplication.example {

    namespace usecases {
        namespace user {
            namespace login {
                namespace SigninWithEmailUseCase {
                    export class Params {
                        readonly email: string;
                        readonly password: string;
                        constructor(email: string, password: string)
                    }
                }
            }
        }
    }

    namespace jscontainer {

        import Params = com.myapplication.example.usecases.user.login.SigninWithEmailUseCase.Params;

        export class JsDependencyContainer {

            constructor(
                serverProtocol: string,
                serverUrl: string,
                serverPort: number,
                isMock?: boolean,
                isDebug?: boolean,
                networkLogLevel?: string
            );

            signInWithEmailUseCase(params: Params): Promise<boolean>
        }
    }
}
