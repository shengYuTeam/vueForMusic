<template>
	<div class="appFooter">
		<router-link class="nav-item" active-class="active" to="/home">
			<span class="footIcon home"></span>
			<span class="footText">首页</span>
		</router-link>
		<router-link class="nav-item" active-class="active" to="/category">
			<span class="footIcon category"></span>
			<span class="footText">分类</span>
		</router-link>
		<router-link class="nav-item" active-class="active" to="/cart">
			<span class="footIcon cart"></span>
			<span class="footText">购物车</span>
		</router-link>
		<router-link class="nav-item" active-class="active" to="/mine">
			<span class="footIcon mine"></span>
			<span class="footText">我的</span>
		</router-link>
	</div>
</template>
<script>
	export default {
		name : 'AppFooter',
		methods : {
			changePage (path) {
				this.$router.push(path)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.appFooter{
		width:100%;
		height:100%;
		display: flex;
		align-items: center;
		border-top: 1px solid #e0e0e0;
	}
	$basePosition:20px;
	$homePosition:-$basePosition*7;
	$categoryPosition:-$basePosition*1;
	$cartPosition:-$basePosition*3;
	$minePosition:-$basePosition*5;
	$baseColor:#FF5722;
	.nav-item{
		flex:1;
		height:100%;
		width:25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size:.11rem;
		.footIcon{
			background-image:url(../assets/footIcon.png);
			background-repeat:no-repeat;
			width:.2rem;
			height:.2rem;
			background-size:.2rem 1.6rem;
		}
		.home{
			background-position:left $homePosition;
		}
		.category{
			background-position:left $categoryPosition;
		}
		.cart{
			background-position:left $cartPosition;
		}
		.mine{
			background-position:left $minePosition;
		}
		&.active{
			.home{
				background-position:left $homePosition+$basePosition;
			}
			.category{
				background-position:left $categoryPosition+$basePosition;
			}
			.cart{
				background-position:left $cartPosition+$basePosition;
			}
			.mine{
				background-position:left $minePosition+$basePosition;
			}
			.footText{
				color:$baseColor;
			}
		}
	}
</style>