# internal-server
프론트용 브라우저단 내부 서버


## ModelAction
모델이 준수 할 수 있는 행동을 담은 인터페이스입니다.

## Model
실제로 데이터를 저장하는 클래스 입니다.

ModelAction을 실제로 구현하는 클래스 입니다.

## Server
실제로 작업을 수행하는 클래스입니다.
서버는 자신이 수행 가능한 ModelAction을 사용측에 요구합니다.
