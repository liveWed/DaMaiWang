<template>
     <div>
         <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="#FF3C1B"
      >
        <slot name="menu" ></slot>
        
        <!-- <el-menu-item index="1">今日推荐</el-menu-item>
        <el-menu-item index="2">即将发售</el-menu-item> -->
      </el-menu>
      <slot name='divCion'></slot>
     </div>
</template>