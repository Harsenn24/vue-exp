

<script setup>
import { useLoginStore } from '../store/login/useLoginStore'
const store = useLoginStore()
const formInput = reactive({
	username_email: '',
	password: ''
})
const submitFunction = async () => {
	await store.login(formInput)
}
</script>

<template>
	<div class="limiter">
		<div class="container-login100" style="background-image: url('images/bg-01.jpg');">
			<div class="wrap-login100 p-t-30 p-b-50">
				<span class="login100-form-title p-b-41">
					Account Login
				</span>
				<div class="login100-form validate-form p-b-33 p-t-5">

					<div class="wrap-input100 validate-input" data-validate="Enter username">
						<input class="input100" type="text" v-model="formInput.username_email" name="username"
							placeholder="Username">
						<span class="focus-input100" data-placeholder="&#xe82a;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" v-model="formInput.password" name="pass"
							placeholder="Password">
						<span class="focus-input100" data-placeholder="&#xe80f;"></span>
					</div>

					<div class="container-login100-form-btn m-t-32">
						<button @click="submitFunction" class="login100-form-btn">
							Login
						</button>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>