<template>
	<div class="appHeader">
		<div class="header-top">
			<div class="logo">
				<img src="../assets/logo.png">
			</div>
			<div class="search">
				<span>搜索商品名称</span>
			</div>
			<div class="userBar">
				<img src="../assets/user.png">
			</div>
		</div>
		<div class="header-nav">
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
			<div class="nav-item">11</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name : 'AppHeader',
		data () {
			return {
				navInfo : []
			}
		},
		methods : {
			getNavInfo () {
				axios.post('/v1/home/page',{
					client_id:'180100031051',
					channel_id:'17489.0001',
					webp:'1',
					page_type:'recommend',
					recommend_tag:'Ox3cE4hdmX7rNVf6kBD5'
				}).then((res)=>{
					console.log(res);
				})
			}
		},
		created () {
			this.getNavInfo()
		}
	}
</script>
<style lang="scss" scoped>
.appHeader{
	display: flex;
	flex-direction: column;
	height:100%;
	background-color:#fafafa;
}
.header-top{
	padding:.075rem 0;
	
	box-sizing:content-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 0;
}
.logo{
	width:.5rem;
	padding:0 0.125rem;
	img {
		width:.25rem;
		height:auto;
	}
}
.userBar{
	width:.5rem;
	display:flex;
	justify-content:center;
	align-items:center;
	img{
		width:.15rem;
	}
}
.search{
	line-height:.17rem;
	background:url("../assets/search.png") no-repeat;
	background-size:101% 101%;
	width:2.6rem;
	height:.265rem;
	border-radius:.025rem;
	border:1px solid #e5e5e5;
	span{
		display: block;
		padding:0 .3rem;
		line-height:.265rem;
		font-size:.13rem;
		color: rgba(0,0,0,.3);
	}
}
.header-nav{
	flex-grow:1;
	flex-shrink: 0;
	overflow-x:scroll;
	font-size:.13rem;
	white-space: nowrap;
	.nav-item{
		margin:0 .14rem;
		font-size:.13rem;
		display: inline-block;
		color:#747474;
		cursor:pointer;
		text-align: center;
		border-bottom:2px solid rgba(237,91,0,0);
		line-height:.28rem;
	}
}
</style>