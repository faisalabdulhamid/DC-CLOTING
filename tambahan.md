1. vendor\laravel\passport\src\Bridge\UserRepository.php
//Add the $provider variable at last or replace this line.
public function getEntityByUserCredentials($username, $password, $grantType, ClientEntityInterface $clientEntity, $provider)
$provider = config('auth.guards.'.$provider.'.provider');

2. vendor\league\oauth2-server\src\Grant\PasswordGrant.php
//Line 88
$provider = $this->getRequestParameter('provider', $request);

if (is_null($provider)) {
     throw OAuthServerException::invalidRequest('provider');
}

$user = $this->userRepository->getEntityByUserCredentials(
        $username,
        $password,
        $this->getIdentifier(),
        $client,
        $provider
    );

	
3. vendor\league\oauth2-server\src\Repositories\UserRepositoryInterface.php
public function getUserEntityByUserCredentials(
	$username,
	$password,
	$grantType,
	ClientEntityInterface $clientEntity,
	$provider
);