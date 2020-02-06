export declare namespace com.example.myapplication {

    namespace usecases {
        namespace user {
            namespace login {
                namespace SigninWithEmailUseCase {
                    class Params {
                        constructor(email: string, password: string)
                    }
                }
            }
        }
    }


    namespace jscontainer {

        import Params = com.example.myapplication.usecases.user.login.SigninWithEmailUseCase.Params;

        class JsDependencyContainer {
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

