"""empty message

Revision ID: 3e21cbe8e386
Revises: f66c40ff5836
Create Date: 2021-03-17 13:12:36.664923

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3e21cbe8e386'
down_revision = 'f66c40ff5836'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('color_palette', 'palette')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('color_palette', sa.Column('palette', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
