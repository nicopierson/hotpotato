"""empty message

Revision ID: d892d839ee24
Revises:
Create Date: 2021-08-22 15:13:16.033215

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd892d839ee24'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('name', sa.String(length=255), nullable=False),
                    sa.Column('image_url', sa.Text(), nullable=True),
                    sa.Column('description', sa.String(
                        length=500), nullable=True),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('name')
                    )
    op.create_table('users',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('username', sa.String(
                        length=40), nullable=False),
                    sa.Column('email', sa.String(length=255), nullable=False),
                    sa.Column('hashed_password', sa.String(
                        length=255), nullable=False),
                    sa.Column('profile_img', sa.String(length=500), nullable=False),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('email'),
                    sa.UniqueConstraint('username')
                    )
    op.create_table('follows',
                    sa.Column('user_id_follow_owner',
                              sa.Integer(), nullable=True),
                    sa.Column('user_id_follower', sa.Integer(), nullable=True),
                    sa.ForeignKeyConstraint(
                        ['user_id_follow_owner'], ['users.id'], ),
                    sa.ForeignKeyConstraint(
                        ['user_id_follower'], ['users.id'], )
                    )
    op.create_table('recipes',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('thumbnail_url', sa.String(
                        length=1500), nullable=True),
                    sa.Column('name', sa.String(length=255), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('name')
                    )
    op.create_table('categories_recipes',
                    sa.Column('recipes', sa.Integer(), nullable=False),
                    sa.Column('categories', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(
                        ['categories'], ['categories.id'], ),
                    sa.ForeignKeyConstraint(['recipes'], ['recipes.id'], ),
                    sa.PrimaryKeyConstraint('recipes', 'categories')
                    )
    op.create_table('comments',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('comment', sa.String(length=500), nullable=True),
                    sa.Column('user_id', sa.Integer(), nullable=False),
                    sa.Column('recipe_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['recipe_id'], ['recipes.id'], ),
                    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table('likes',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=False),
                    sa.Column('recipe_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['recipe_id'], ['recipes.id'], ),
                    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table('recipe_directions',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('steps', sa.Integer(), nullable=False),
                    sa.Column('directions', sa.String(
                        length=800), nullable=False),
                    sa.Column('recipe_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['recipe_id'], ['recipes.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table('recipe_ingredients',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('ingredient', sa.String(
                        length=255), nullable=False),
                    sa.Column('measurement', sa.String(
                        length=255), nullable=True),
                    sa.Column('recipe_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['recipe_id'], ['recipes.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table('recipe_photos',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('video_url', sa.String(
                        length=500), nullable=True),
                    sa.Column('img_url', sa.String(length=500), nullable=True),
                    sa.Column('recipe_id', sa.Integer(), nullable=True),
                    sa.ForeignKeyConstraint(['recipe_id'], ['recipes.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('recipe_photos')
    op.drop_table('recipe_ingredients')
    op.drop_table('recipe_directions')
    op.drop_table('likes')
    op.drop_table('comments')
    op.drop_table('categories_recipes')
    op.drop_table('recipes')
    op.drop_table('follows')
    op.drop_table('users')
    op.drop_table('categories')
    # ### end Alembic commands ###
